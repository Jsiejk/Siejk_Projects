import {beforeEach, describe, expect, it, vi} from 'vitest';
import { render, waitFor } from '@testing-library/svelte';
import PokemonDetails from './PokemonDetails.svelte';

describe("Pokemon Details", () => {

    beforeEach(() => {
        global.fetch = vi.fn().mockImplementation(() => {
            return Promise.resolve({
                json() {
                  return Promise.resolve({name: 'Test Poke', height: 3, weight: 20, sprites: {front_default: ''}});
                }
            });
        });
    });

    it('should show error when the API fails', async () => {

        global.fetch = vi.fn().mockImplementationOnce(() => {
            return Promise.reject();
        });
  
        const {getByText } = render(PokemonDetails);
  
        await waitFor(() => getByText(/Error while loading the data/i));
    })

    it('should show the data',async () => {
        const {getByText} = render(PokemonDetails);

        await waitFor(() => getByText(/Pokemon: Test Poke/i));
        await waitFor(() => getByText(/Height: 3/i));
        await waitFor(() => getByText(/Weight: 20/i));
    })
    
})
