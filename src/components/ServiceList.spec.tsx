import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServiceList from './ServiceList';

const mockServices = [
    { id: 1, service: 'Service 1', status: 'up' },
    { id: 2, service: 'Service 2', status: 'warning' },
    { id: 3, service: 'Service 3', status: 'error' },
];

describe('ServiceList', () => {


    it('render message error', () => {
        render(<ServiceList services={[]} />);

        expect(screen.getByText('Ocorreu um erro ao carregar os serviços. Por favor, tente novamente mais tarde.')).toBeInTheDocument();
    });

    it('render services', () => {
        render(<ServiceList services={mockServices} />);

        expect(screen.getByText('Service 1')).toBeInTheDocument();
        expect(screen.getByText('Service 2')).toBeInTheDocument();
        expect(screen.getByText('Service 3')).toBeInTheDocument();
    });

    it('display tooltip on hover', async () => {
        render(<ServiceList services={mockServices} />);

        const serviceElement = screen.getByText('Service 1');

        fireEvent.mouseOver(serviceElement);

        await waitFor(() => {
            expect(screen.getByTestId('tooltip-1')).toBeInTheDocument();
        }, {timeout: 1000});

        expect(serviceElement).toBeInTheDocument();

    });

});

