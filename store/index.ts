import { defineStore } from 'pinia'
import { tracks } from '~/mocks/tracks';

export const useTracksStore = defineStore('tracks', {
  state: () => ({
    currentTrackId: 0,
    isCurrentTrackPlayed: false,
    tracksFiltered: [...tracks],
    tracks: [...tracks],
    playerMode: 'pinned', // todo fix name
  }),
  actions: {
    setCurrentTrackId(id: number) {
      this.currentTrackId = id;
    },
    setTracksOrder() {
      const startIndex = tracks.findIndex(({id}) => id === this.currentTrackId);
      this.tracksFiltered = [...tracks.slice(startIndex), ...tracks.slice(0, startIndex)];
    },
    togglePayerMode() {
      this.playerMode = this.playerMode === 'list' ? 'pinned' : 'list'; // todo to consts
    },
    setIsCurrentTrackPlayed(value: boolean) {
      this.isCurrentTrackPlayed = value;
    }
  }
})
