import React, { Component } from 'react';

export default class Pagination extends Component {
    render() {
        return (
            <nav>
                <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                        <a className="page-link">
                            Previous
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
