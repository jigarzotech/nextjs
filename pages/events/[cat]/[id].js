import SingleEvent from '../../../src/components/events/single-event';

const EventPage = ({ data }) => <SingleEvent data={data} />;

export default EventPage;

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json')
    const allPaths = allEvents.map((ev) => {
        return {
            params: {
                cat: ev.city,
                id: ev.id
            }
        }
    })
    // console.log(allPaths);
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { allEvents } = await import('/data/data.json')
    const id = context.params.id
    //console.log(id);
    const data = allEvents.find((ev) => ev.id === id)
    return {
        props: { data }
    }
}