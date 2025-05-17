import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('HelloPage', () => {
    it('renders hello message', () => {
        render(<Home />);

        expect(screen.getByRole('heading').textContent).toBe('Hello, Vitest!');
    });
});