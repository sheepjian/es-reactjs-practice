/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

import React from 'react';
import ReactDOM from 'react-dom';
import SearchableTable from './SearchableTable';
import CommentBox from './CommentBox';
import {data} from './data';

// Filterable CheatSheet Component
ReactDOM.render( <SearchableTable data={data}/>, document.getElementById('searchableTable') );
ReactDOM.render( <CommentBox/>, document.getElementById('commentBox') );