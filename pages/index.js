import Layout from "../components/layout";
import Head from 'next/head';
import { Jumbotron } from 'react-bootstrap';

function HomePage() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Sean Woodward | Home</title>
                </Head>
                <Jumbotron>                    
                    <img src="/SeanWoodward.jpg" alt="Sean Woodward" width="235" height="225" className="img-fluid float-left mr-3" />
                    <div class="float-none">
                        <h1 class="display-4">Sean Woodward</h1>                    
                        <p class="lead">Swiss Army Knife Full Stack Developer</p>
                        <p>Hello, my name is Sean Woodward.</p>
                        <p>My specialty is converting business need in to software. Most times companies will have some processes that started with an Excel file, then became an Access Database or SharePoint list and now needs a Web App, Reports, and probably some ETL processes as well. That is where I come in. I will understand the business need, the current state, the desired future state, and exceed at providing the desired result.</p>
                        <p>I have working experience with .NET Framework (MVC), .NET Core (MVC), Entity Framework (.NET and Core), SQL Server, SSRS, SSIS, and Console Service Applications. I have also recently been involved with projects that use React and Blazor.</p>
                        <p>I have a Masters Degree in Computer Information Systems which I obtained from Independence University.</p>
                        <p>As well as working experience with the Microsoft suite of web development tools, I also use NodeJS for my own personal projects. Infact, this Portfolio / Blog is made using Next.js.</p>
                        <p>Contact me <a href="mailto:SeanWoodward@seanwoodwardweb.com">SeanWoodward@seanwoodwardweb.com</a></p>                        
                        <p>Schedule an appointment with me <a href="https://calendly.com/seanwoodward">https://calendly.com/seanwoodward</a></p>
                    </div>
                </Jumbotron>
                
            </Layout>
        </>
    )
}

export default HomePage