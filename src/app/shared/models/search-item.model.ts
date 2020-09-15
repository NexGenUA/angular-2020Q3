interface ThumbnailsItem {
  url: string;
  width?: number;
  height?: number;
}

export interface Snippet {
  publishedAt: string;
  channelId?: string;
  title: string;
  description: string;
  thumbnails: thumbnails;
  channelTitle?: string;
  tags?: string[];
  categoryId?: string;
  defaultLanguage?: string;
  liveBroadcastContent?: string;
  localized?: {
    title: string;
    description: string;
  };
  defaultAudioLanguage?: string;
}

type thumbnailsProps = 'default' | 'medium' | 'high' | 'standard' | 'maxres';
type thumbnails = { [key in thumbnailsProps]?: ThumbnailsItem; };

type statisticsProps = 'viewCount' | 'likeCount' | 'dislikeCount' | 'favoriteCount' | 'commentCount';
type statistics = { [key in statisticsProps]: string; };

export interface SearchItem {
  kind?: string;
  etag?: string;
  id?: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet;
  statistics?: statistics;
}
