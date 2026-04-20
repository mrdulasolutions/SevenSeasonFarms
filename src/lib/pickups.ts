export type Pickup = {
  name: string;
  address: string;
  city: string;
  zip: string;
  times: string[];
};

export const PICKUPS: Pickup[] = [
  {
    name: "Seven Seasons Farm",
    address: "4120 Cannady Mill Rd",
    city: "Oxford, NC",
    zip: "27565",
    times: [
      "Monday 1:00–1:15 PM",
      "Wednesday 1:00–1:15 PM",
      "Friday 4:45–5:00 PM",
      "Saturday 10:45–11:00 AM",
    ],
  },
  {
    name: "Wake Forest Farmer's Market",
    address: "235 S. Taylor St",
    city: "Wake Forest, NC",
    zip: "27587",
    times: ["Saturday 8:00 AM–12:00 PM"],
  },
  {
    name: "The Forks Cafeteria",
    address: "339 S Brooks St",
    city: "Wake Forest, NC",
    zip: "27587",
    times: ["Saturday 10:30–11:00 AM"],
  },
  {
    name: "Youngsville",
    address: "106 NW Railroad St",
    city: "Youngsville, NC",
    zip: "27596",
    times: ["Wednesday 6:30–6:45 PM"],
  },
  {
    name: "North Hills — Bloom Family Wellness",
    address: "3948 Browning Pl",
    city: "Raleigh, NC",
    zip: "27609",
    times: ["Tuesday 1:15–1:20 PM"],
  },
  {
    name: "Cary — Well One Collective",
    address: "114 Brady Ct",
    city: "Cary, NC",
    zip: "27511",
    times: ["Tuesday 12:45–12:50 PM"],
  },
  {
    name: "Fuquay-Varina",
    address: "801 Durham St",
    city: "Fuquay-Varina, NC",
    zip: "27526",
    times: ["Tuesday 12:00–12:05 PM"],
  },
];
