
import { render, screen, fireEvent } from '@testing-library/react';
import Transport from '@/components/footprint/footPrintBlocks/Transport';


describe('testing Transport ', () => {
  const transportType = {
    name: 'landTransport',
    title: 'Land transport',
    options: [
      { name: 'car', title: 'Car' },
      { name: 'bus', title: 'Bus' },
    ],
  };

  const footprintChange = jest.fn();

  it('renders without crashing', () => {
    render(<Transport transportType={transportType} footprintChange={footprintChange} />);
    expect(screen.getByLabelText('Land transport')).toBeInTheDocument();
  });

  it('calls footprintChange when distance is changed', () => {
    render(<Transport transportType={transportType} footprintChange={footprintChange} />);

    const input = screen.getByLabelText('Set distance, km');

    fireEvent.change(input, { target: { value: '100' } });

    expect(footprintChange).toHaveBeenCalledWith(expect.any(Number));
  });

  it('calls footprintChange when transport is selected', () => {
    render(<Transport transportType={transportType} footprintChange={footprintChange} />);

    const select = screen.getByLabelText('Land transport');

    fireEvent.change(select, { target: { value: 'car' } });

    expect(footprintChange).toHaveBeenCalledWith(expect.any(Number));
  });
});
