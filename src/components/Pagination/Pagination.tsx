import React, { Component } from 'react';
import './Pagination.scss';

export default class Pagination extends Component {
    render() {
        return (
            <nav>
                <ul className="pagination justify-content-between">
                    <li className="page-item disabled">
                        <a className="page-link" href="#">
                            Previous
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
