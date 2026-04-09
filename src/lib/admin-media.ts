import { randomUUID } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import type { UploadedMedia } from '@/lib/admin-store';

const MAX_MEDIA_BYTES = 50 * 1024 * 1024;

function sanitizeBaseName(input: string) {
  return input.replace(/[^a-zA-Z0-9-_]/g, '-').slice(0, 48) || 'upload';
}

function extFromFile(file: File) {
  const parsed = path.parse(file.name ?? '');
  if (parsed.ext) {
    return parsed.ext.toLowerCase();
  }

  if (file.type === 'image/jpeg') return '.jpg';
  if (file.type === 'image/png') return '.png';
  if (file.type === 'image/webp') return '.webp';
  if (file.type === 'video/mp4') return '.mp4';
  return '';
}

export async function saveUploadedMedia(file: File): Promise<UploadedMedia> {
  if (!(file.type.startsWith('image/') || file.type.startsWith('video/'))) {
    throw new Error('Only image or video uploads are allowed.');
  }

  if (file.size > MAX_MEDIA_BYTES) {
    throw new Error('File is too large. Max upload size is 50MB.');
  }

  const uploadsDir = path.join(process.cwd(), 'public', 'admin-uploads');
  await mkdir(uploadsDir, { recursive: true });

  const ext = extFromFile(file);
  const base = sanitizeBaseName(path.parse(file.name).name);
  const fileName = `${Date.now()}-${base}-${randomUUID().slice(0, 8)}${ext}`;
  const absPath = path.join(uploadsDir, fileName);

  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(absPath, bytes);

  return {
    url: `/admin-uploads/${fileName}`,
    name: file.name || fileName,
    type: file.type || 'application/octet-stream',
    size: file.size,
  };
}
