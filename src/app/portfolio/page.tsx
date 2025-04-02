'use client';
import Image from 'next/image';

const portfolioData = [
    {
        title: 'BMKG Weather Forecast ETL Data Pipeline',
        description: 'Apache Airflow data pipeline to load, extract and transform weather forecast data at Bulukumba Regency from BMKG API into Clickhouse',
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*tZ9ZS55fJmtmep4SBzqR_g.png',
        link: 'https://medium.com/@nuryaumi10/my-journey-to-creating-my-first-apache-airflow-etl-weather-forecast-data-pipeline-115090457b93'
    },
    {
        title: 'E-Commerce Analytics Dashboard',
        description: 'An interactive analytics dashboard for monitoring e-commerce performance',
        imageUrl: '/assets/project-1.png',
        link: 'http://103.164.20.24:8050/'
    },
    {
        title: 'Create Interactive Dashboard Using Python Dash',
        description: 'How to create an interactive dashboard using Python Dash callback',
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*aHzUMGvwAgyAj7FaiwyQ_Q.png',
        link: 'https://medium.com/@nuryaumi10/build-interactive-dashboard-using-python-dash-8d145037123'
    },
    {
        title: 'Students Exam Scores from Kaggle Dataset Analysis',
        description: 'Doing student exam score analysis using python pandas to load, clean, and do descriptive analysis, also use Seaborn to create data visualization.',
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*trImQw5f8VcXK4UjRs2gkw.png',
        link: 'https://medium.com/@nuryaumi10/students-exam-scores-kaggle-dataset-data-analysis-a1d5d26e315b'
    },
    
];

export default function Page() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-[#B03052] text-center mb-8">Portfolio</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.map((project, index) => (
                <a 
                    key={index}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform bg-[#EBE8DB]"
                >
                    {/* Replace img with Image */}
                    <Image 
                    src={project.imageUrl}
                    alt={project.title}
                    width={600} // Original image width
                    height={400} // Original image height
                    className="w-full h-48 object-cover"
                    onError={({ currentTarget }) => {
                        currentTarget.style.display = 'none';
                    }}
                    />
                    <div className="p-4 ">
                        <h3 className="font-semibold text-xl text-primary mb-2 text-[#B03052]">{project.title}</h3>
                        <p className="text-[#B03052]">{project.description}</p>
                    </div>
                </a>
                ))}
            </div>
        </section>
    );
}