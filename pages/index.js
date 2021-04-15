import Layout from "../components/layout";
import Head from 'next/head'

function HomePage() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Sean Woodward | Home</title>
                </Head>
                <img src="/SeanWoodward.jpg" alt="Sean Woodward" width="159" height="212" className="float-left mr-3" />
                <p className="float-none">
                    Hello, I am Sean Woodward. <br /> <br />
                    My specialty is converting business need in to software. Most times companies will have some processes that started with an Excel file, then became an Access Database or SharePoint list and now needs a Web App, Reports, and probably some ETL processes as well. That is where I come in. I will understand the business need, the current state, the desired future state, and exceed at providing the desired result. <br /> <br />
                    I have working experience with .NET Framework (MVC), .NET Core (MVC), Entity Framework (.NET and Core), SQL Server, SSRS, SSIS, and Console Service Applications. I have also recently been involved with a project that uses Blazor. <br /> <br />                    
                    I have a Masters Degree in Computer Information Systems which I obtained from Independence University. <br /> <br />
                    As well as working experience with the Microsoft suite of web development tools, I also use NodeJS for my own personal projects. Infact, this Portfolio / Blog is made using Next.js. <br /> <br />
                    Contact me <a href="mailto:SeanWoodward@seanwoodwardweb.com">SeanWoodward@seanwoodwardweb.com</a>
                </p>
            </Layout>
        </>
    )
}

export default HomePage