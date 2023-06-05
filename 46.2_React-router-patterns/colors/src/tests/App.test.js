import App from "../components/App"
import {render} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

it("renders without crashing", () => {
    render(
        <MemoryRouter>

            <App />
        </MemoryRouter>
)})
