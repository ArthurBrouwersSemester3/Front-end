// api.js
export function fetchData() {
    return fetch('https://api.example.com/data').then(response => response.json());
}

// api.test.js
import { fetchData } from './api';

test('fetchData returns the expected data', async () => {
    const mockData = { foo: 'bar' };

    // mock the implementation of the fetchData function
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData),
    }));

    // call the fetchData function
    const data = await fetchData();

    // assert that the data returned by fetchData matches the expected data
    expect(data).toEqual(mockData);

    // restore the original implementation of the fetchData function
    global.fetch.mockRestore();
});