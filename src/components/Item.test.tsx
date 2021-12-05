import { fireEvent } from "@testing-library/dom";
import { render } from "src/test-utils";
import Item from "./Item";


describe('Item component', () => {
    test('Should render Item component', async () => {
        const { getByText, findByText } = render(<Item title="Vitamin A" label="Add to basket" media="/assets/vitl-img.png" onClick={() => { }} />)
        const titleText = getByText(/vitamin a/i);
        expect(titleText).toBeInTheDocument()
        fireEvent.click(await findByText(/add to basket/i))
    })
})