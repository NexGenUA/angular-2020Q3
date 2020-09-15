import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { YoutubeItems, nodes, State } from '../state.model';
import { SearchItem } from '../../shared/models/search-item.model';

const getCreateItemsFeature: Selector<State, YoutubeItems> =
  createFeatureSelector<YoutubeItems>(nodes.createItems);

export const getCreateItems: Selector<State, SearchItem[]> = createSelector(
  getCreateItemsFeature,
  (state: YoutubeItems): SearchItem[] => state.items,
);

export const isCreateItems: Selector<State, boolean> = createSelector(
  getCreateItemsFeature,
  (state: YoutubeItems): boolean => state.isData,
);
