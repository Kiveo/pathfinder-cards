import { useContext } from 'react';
import CardContext from 'context';

// simple card form validation, versaility of hooks with a custom hook and useContext
export default function useCardValidator(formData) {
  const { state } = useContext(CardContext);
  const preExisting = state.cards.find((card) => card.name === formData.name);

  if (formData.name === '' || formData.description === '') {
    return { valid: false, message: 'Ensure all fields are filled in.' };
  }
  if (preExisting && (preExisting.id !== formData.id)) {
    return { valid: false, message: 'A card with that name already exists' };
  }

  return { valid: true, message: 'Card validated' };
}
