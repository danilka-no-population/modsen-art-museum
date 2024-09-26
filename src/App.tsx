import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                {Object.values(ROUTES).map((r) => (
                    <Route
                        key={r.basePath}
                        path={r.getRoutePath()}
                        Component={r.component}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}
