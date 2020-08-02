interface ThumbnailsItem {
  url: string;
  width: number;
  height: number;
}

type thumbnailsProps = 'default' | 'medium' | 'high' | 'standard' | 'maxres';
type thumbnails = { [key in thumbnailsProps]: ThumbnailsItem; };

type statisticsProps = 'viewCount' | 'likeCount' | 'dislikeCount' | 'favoriteCount' | 'commentCount';
type statistics = { [key in statisticsProps]: string; };

export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: thumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: statistics;
}
