import { Fragment } from "react";
import Container from "../Components/Layouts/Container";
import Header from "../Components/UI/Header";
import InputLayout from "../Components/Layouts/InputLayout";
import InformationSection from "../Components/Layouts/InformationSection";
import Footer from "../Components/Layouts/Footer";
import UrlChangeButton from "../Components/UI/UrlChangeButton";


function DownloadVideoPage() 
{
    return (
        <Fragment>
            <Container> 
                <Header type="Video" />
                <InputLayout type="video" />
                <UrlChangeButton to="music">Go to Music Page</UrlChangeButton>
                <InformationSection
                    firstText="Are you looking for a website for downloading videos?"
                    secondText="That is super perfect website 
                    for downloading videos 
                    with high quality."
                    thirdText="All your requirements resolved only one click."
                    fourthText="Video is downloaded with best quality."
                />
            </Container>
            <Footer />
        </Fragment>
    );
}

export default DownloadVideoPage;