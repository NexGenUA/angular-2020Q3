import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { SearchItem } from '../../shared/models/search-item.model';
import { nodes, State, YoutubeItems } from '../state.model';

const getYoutubeItemsFeature: Selector<State, YoutubeItems> =
  createFeatureSelector<YoutubeItems>(nodes.youtubeItems);

export const getYoutubeItems: Selector<State, SearchItem[]> = createSelector(
  getYoutubeItemsFeature,
  (state: YoutubeItems): SearchItem[] => state.items,
);

export const youtubeItemsIsLoad: Selector<State, boolean> = createSelector(
  getYoutubeItemsFeature,
  (state: YoutubeItems): boolean => state.isData,
);
