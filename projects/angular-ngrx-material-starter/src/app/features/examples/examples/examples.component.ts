import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'orca-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'orca.examples.menu.todos' },
    { link: 'stock-market', label: 'orca.examples.menu.stocks' },
    { link: 'theming', label: 'orca.examples.menu.theming' },
    { link: 'crud', label: 'orca.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'orca.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'orca.examples.menu.form' },
    { link: 'notifications', label: 'orca.examples.menu.notifications' },
    { link: 'elements', label: 'orca.examples.menu.elements' },
    { link: 'authenticated', label: 'orca.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
