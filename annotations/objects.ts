const profile = {
  alias: "bishal",
  currentAge: 24,
  coords: {
    lat: 27,
    lng: 83,
  },

  setAge(inputAge: number) {
    this.currentAge = inputAge;
  },
};

// annotations around objects

const {
  alias,
  currentAge,
  coords: { lat, lng },
}: {
  alias: string;
  currentAge: number;
  coords: {
    lat: number;
    lng: number;
  };
} = profile;
