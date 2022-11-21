import { Power2save } from './index';

const weekDays = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
];
const power2save = new Power2save(weekDays);
describe('Power2Save', () => {

  it('returns the correct number when passed items', () => {
    expect(power2save.getValue(['monday', 'wednesday', 'friday'])).toBe(21);
  });

  it('returns the correct items when passed a number', () => {
    expect(power2save.getItems(21)).toEqual(['monday', 'wednesday', 'friday']);
  });
});