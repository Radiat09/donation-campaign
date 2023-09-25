const getStoredDonation = () => {
  const storedDonation = localStorage.getItem("donation");
  if (storedDonation) {
    return JSON.parse(storedDonation);
  }
  return [];
};

const saveDonationToLocalStorage = (donatedCard) => {
  const storedDonations = getStoredDonation();
  const exists = storedDonations.find((card) => card.id === donatedCard.id);
  if (!exists) {
    storedDonations.push(donatedCard);
    localStorage.setItem("donation", JSON.stringify(storedDonations));
  }
};

export { getStoredDonation, saveDonationToLocalStorage };
