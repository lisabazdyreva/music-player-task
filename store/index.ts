import { defineStore } from 'pinia'
import { tracks } from '~/mocks/tracks';

export const useTracksStore = defineStore('tracks', {
  state: () => ({
    currentTrackId: 0,
    isCurrentTrackPlayed: false,
    tracksFiltered: tracks.slice(),
    tracks: tracks.slice(),
    isPlayerShowed: true,
  }),
  actions: {
    setCurrentTrackId(id: number) {
      this.currentTrackId = id;
    },
    setTracksOrder() {
      const startIndex = tracks.findIndex(({id}) => id === this.currentTrackId);
      this.tracksFiltered = [...tracks.slice(startIndex), ...tracks.slice(0, startIndex)];
    },
    togglePayerShowed() {
      this.isPlayerShowed = !this.isPlayerShowed;
    },
    setIsCurrentTrackPlayed(value: boolean) {
      this.isCurrentTrackPlayed = value;
    }
  },
});
