import { Phone } from './phone.model';

export interface AppStore {
  phones: Phone[];
  selectedItem: Phone;
};
