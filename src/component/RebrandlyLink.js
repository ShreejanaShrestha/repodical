import React, { Component } from 'react';


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

import Header  from '../Header';

class RebrandlyLink extends Component {

    links = [
        "title"= "Link pux0r",
        "destination"= "https://www.youtube.com/watch?v=3VmtibKpmXI",
         "shortUrl"= "rebrand.ly/pux0r"
    ];
    }


    render() {
        return(
            <div>
                <Header>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Title</TableHeaderColumn>
                                <TableHeaderColumn>Destination</TableHeaderColumn>
                                <TableHeaderColumn>Short URL</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            { 
                                this.links.map(link => {
                                    return (
                                    <TableRow>
                                        <TableHeaderColumn>link.Title</TableHeaderColumn>
                                        <TableHeaderColumn>link.Destination</TableHeaderColumn>
                                        <TableHeaderColumn>link.Short URL</TableHeaderColumn>
                                    </TableRow>
                                    )
                                }
                                )
                            }
                        </TableBody>
                    </Table>
                </Header>
            </div>
        )}
    componentWillMount() {
        fetch('https://api.rebrandly.com/v1/account', 
      {
        headers: {
                    apikey: apikey
                }

      })
    }
    

export default RebrandlyLink;