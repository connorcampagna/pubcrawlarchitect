import { Venue } from '@/types';

interface VenueCardProps {
  venue: Venue;
  onSelect?: (venue: Venue) => void;
}

export default function VenueCard({ venue, onSelect }: VenueCardProps) {
  return (
    <div 
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer"
      onClick={() => onSelect?.(venue)}
    >
      {venue.photoUrl && (
        <img 
          src={venue.photoUrl} 
          alt={venue.name}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
      )}
      
      <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{venue.address}</p>
      
      <div className="flex items-center justify-between">
        {venue.rating && (
          <div className="flex items-center">
            <span className="text-yellow-500">⭐</span>
            <span className="ml-1 font-medium">{venue.rating}</span>
          </div>
        )}
        
        {venue.priceLevel && (
          <span className="text-gray-500">
            {'$'.repeat(venue.priceLevel)}
          </span>
        )}
      </div>
    </div>
  );
}
