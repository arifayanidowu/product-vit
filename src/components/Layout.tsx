import React from 'react'
import Product from './Product'
import SliderMenu from './SliderMenu'
import Navbar from './Utils/Navbar'

export default function Layout() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    }
    return (
        <>
            <Navbar {...{ toggleDrawer }} />
            <SliderMenu {...{ open, toggleDrawer }} />
            <Product />
        </>
    )
}
