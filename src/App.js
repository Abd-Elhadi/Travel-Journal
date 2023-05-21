import Navbar from "./components/Navbar";
import Card from './components/Card'
import Footer from "./components/Footer";
import data from './data'

export default function App() {
    let elements = data.map(exp => {
        return <Card 
            key={exp.id}
            {...exp}
        />
    })
    return (
        <>
            <Navbar />
            {elements}
            <Footer />
        </>
    )
}