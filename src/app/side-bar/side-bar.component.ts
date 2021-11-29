import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router'

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
    current_page: string = ''

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.current_page = params['name']
            console.log(params)
        })
    }

    setCurrentPage(page: string): void {
        this.current_page = page
        this.router.navigate(['/' + page])
    }
}
