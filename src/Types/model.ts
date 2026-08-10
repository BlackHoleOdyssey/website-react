export interface ProjectData {
    id: number;
    title: string;
    status: 'in-progress' | 'released' | 'prototype';
    description: string;
    coverImage: string;
    screenshot: string[];
    genre?: string[];
    releaseDate?: string;
    platformBadge?: string;
    platformLogo?: string;
    link?: string;
}