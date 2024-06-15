
import { render, fireEvent, screen } from '@testing-library/react';
import FootPrintBlock from '@/components/footprint/footPrintBlocks/FootPrintBlock';


// mock Transport component
jest.mock('@/components/footprint/footPrintBlocks/Transport', () => ({ transportType, footprintChange }) => (
  <div>
    <label htmlFor={transportType.name}>{transportType.title}</label>
    <input
      data-testid={transportType.name}
      type="number"
      onChange={(e) => footprintChange(parseInt(e.target.value))}
    />
  </div>
));

describe.only('testing FootPrintBlock Component', () => {

  test('updates total footprint correctly', () => {
    render(<FootPrintBlock userId="123" />);

    const distanceInput = screen.getByTestId('electroTransport');

    fireEvent.change(distanceInput, { target: { value: '100' } });

    expect(screen.getByText(/Total Footprint:/).textContent).toBe('Total Footprint: 100');
  });
});
