import { IArtist } from '@hjackson/model';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useRouteLoaderData } from 'react-router-dom';

export default function DataChart() {
    const artists = useRouteLoaderData("artist_list") as IArtist[]
    console.log(JSON.stringify(artists))
    const rows: GridRowsProp = artists
    const columns: GridColDef[] = [
        { field: 'artist_id', headerName: 'Artist ID', width: 150, editable: true },
        { field: 'name', headerName: 'Artist Name', width: 150 },
    ];

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid 
                columns={columns} 
                rows={rows} 
                getRowId={(row) =>  row.artist_id}
            />
        </div>
    );
}