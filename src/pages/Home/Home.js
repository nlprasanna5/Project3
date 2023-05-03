
import UndoFormat from "../../components/NavbarComponents/UndoFormat/UndoFormat";
import RedoFormat from "../../components/NavbarComponents/RedoFormat/RedoFormat";
import PrintNav from "../../components/NavbarComponents/PrintNav/PrintNav";
import SpellCheck from "../../components/NavbarComponents/SpellCheck/SpellCheck";
import PaintFormat from "../../components/NavbarComponents/PaintFormat/PaintFormat";
import ScreenWidth from "../../components/NavbarComponents/ScreenWidth/ScreenWidth";
import FontStyle from "../../components/NavbarComponents/FontStyle/FontStyle";
import FontSize from "../../components/NavbarComponents/FontSize/FontSize";
import Bold from "../../components/NavbarComponents/Bold/Bold";
import Italic from "../../components/NavbarComponents/Italic/Italic";
import Underline from "../../components/NavbarComponents/Underline/Underline";
import TextColor from "../../components/NavbarComponents/TextColor/TextColor";
import HighlightColor from "../../components/NavbarComponents/HighlightColor/HighlightColor";
import InsertLink from "../../components/NavbarComponents/InsertLink/InsertLink";
import InsertImage from "../../components/NavbarComponents/InsertImage/InsertImage";
import AlignIndent from "../../components/NavbarComponents/AlignIndent/AlignIndent";
import AlignCenter from "../../components/NavbarComponents/AlignIndent/AlignCenter";
import AlignJustify from "../../components/NavbarComponents/AlignIndent/AlignJustify";
import AlignRight from "../../components/NavbarComponents/AlignIndent/AlignRight";
import FormatLineSpacing from "../../components/NavbarComponents/FormatLineSpacing/FormatLineSpacing";
import BulletList from "../../components/NavbarComponents/BulletList/BulletList";
import NumberList from "../../components/NavbarComponents/NumberList/NumberList";
import DecreaseIndent from "../../components/NavbarComponents/DecreaseIndent/DecreaseIndent";
import IncreaseIndent from "../../components/NavbarComponents/IncreaseIndent/IncreaseIndent";
import ClearFormat from "../../components/NavbarComponents/ClearFormat/ClearFormat";

import MenuBar from "../../components/menubar/MenuBar";

import home from './Home.module.css';

function Home() {
    const navComponents = [
        <UndoFormat />,
        <RedoFormat />,
        <PrintNav />,
        <SpellCheck />,
        <PaintFormat />,
        <ScreenWidth />,
        <FontStyle />,
        <FontSize />,
        <Bold />,
        <Italic />,
        <Underline />,
        <TextColor />,
        <HighlightColor />,
        <InsertLink />,
        <InsertImage />,
        <AlignIndent />,
        <AlignCenter />,
        <AlignRight />,
        <AlignJustify />,
        <FormatLineSpacing />,
        <BulletList />,
        <NumberList />,
        <DecreaseIndent />,
        <IncreaseIndent />,
        <ClearFormat />
    ]
    return (
        <>
            <MenuBar />
            <div className={home.mainNav}>
                <div className={home.navContainer}>
                    {navComponents.map((navItem, index) => (
                        <>
                            {navItem}
                        </>
                    ))
                    }
                </div>
            </div>
        </>
    )
}


export default Home;