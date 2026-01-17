import { useState } from 'react'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

const ContactMap = () => {
  const [markerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  })

  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] rounded-2xl overflow-hidden flex-1">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
        <Map
          style={{ width: '100%', height: '100%', borderRadius: '16px' }}
          defaultZoom={13}
          defaultCenter={markerLocation}
          gestureHandling={'greedy'}
          disableDefaultUI
        >
          <Marker position={markerLocation} />
        </Map>
      </APIProvider>
    </div>
  )
}

export { ContactMap }
