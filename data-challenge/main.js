function transform(data) {
  console.log(data)
}

const start = {
  Clients: {
    171: { id: 171, name: 'John Smith', active: false },
    172: { id: 172, name: 'Jacob Jacobson', active: true },
    1441: { id: 1441, name: 'Eric Ericsson', active: true },
  },
  Caregivers: {
    1: { id: 1, name: 'John Johnson', active: true },
    37: { id: 37, name: 'James Jameson', active: false },
    15: { id: 15, name: 'Aaron Aaronson', active: true },
  },
  Doctors: {
    1147: { id: 1147, name: 'Doc Docson', active: true },
  },
  Hospitals: {
    115: { id: 115, active: false, name: "St. Mary's" },
  },
  Applicants: {
    17345: { id: 17345, name: 'Bob Bobson', active: true },
    17346: { id: 17346, name: 'Jeff Jeffson', active: false },
    17347: { id: 17347, name: 'Frank Frankson', active: true },
    17348: { id: 17348, name: 'Bill Billson', active: true },
  },
};

// Notice that the entries are sorted by group first, then label.
// Notice also that active: false records are excluded.
const expected = [
  { label: 'Bill Billson', value: 17348, group: 'Applicants' },
  { label: 'Bob Bobson', value: 17345, group: 'Applicants' },
  { label: 'Frank Frankson', value: 17347, group: 'Applicants' },
  { label: 'Aaron Aaronson', value: 15, group: 'Caregivers' },
  { label: 'John Johnson', value: 1, group: 'Caregivers' },
  { label: 'Eric Ericsson', value: 1441, group: 'Clients' },
  { label: 'Jacob Jacobson', value: 172, group: 'Clients' },
  { label: 'Doc Docson', value: 1147, group: 'Doctors' },
];

transform(start)
