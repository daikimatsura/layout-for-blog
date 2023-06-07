import * as React from 'react';
import Layout from '../templetes/Layout';
import { Paper, Typography } from "@mui/material";

const Home: React.FC = () => {

    return(
        <Layout title="Home">
            <Paper >
            <Typography variant="h4">Hello React App!</Typography>
            </Paper>
        </Layout>
    )
};
export default Home;