import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Home.module.css'

export const HomePage = ({ data }) => (
    <div className="home_body">
        {data?.map((ev) => (
            <Link key={ev.id} href={`/events/${ev.id}`} passHref className="card">
                <div className="image">
                    <Image width={400} height={400} alt={ev.title} src={ev.image} />
                </div>
                <div className="content">
                    <h2> {ev.title} </h2>
                    <p> {ev.description} </p>
                </div>
            </Link>
        ))}
    </div>
);
