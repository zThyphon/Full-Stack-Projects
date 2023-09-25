import { Fragment } from "react";
import Container from "../Components/Layouts/Container";
import Header from "../Components/UI/Header";
import InputLayout from "../Components/Layouts/InputLayout";
import InformationSection from "../Components/Layouts/InformationSection";
import Footer from "../Components/Layouts/Footer";
import UrlChangeButton from "../Components/UI/UrlChangeButton";

function DownloadMusicPage() 
{
    return (
        <Fragment>
            <Container> 
                <Header type="Music" />
                <InputLayout type="music"/>
                <UrlChangeButton to="video">Go to Video Page</UrlChangeButton>
                <InformationSection
                    firstText="Are you looking for a website for downloading your favorite song?"
                    secondText="That is super perfect website 
                    for downloading songs 
                    with high quality."
                    thirdText="All your requirements resolved only one click."
                    fourthText="Music is downloaded with best quality."
                />
            </Container>
            <Footer />
        </Fragment>
    );
}

export default DownloadMusicPage;