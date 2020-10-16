import Orphanage from '../models/Orphanage';


export default {
    render( orphanage: Orphanage ) {
        return{ 
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            open_on_weekends: orphanage.open_on_weekends,
            opening_hours: orphanage.opening_hours,
        }
    }
}