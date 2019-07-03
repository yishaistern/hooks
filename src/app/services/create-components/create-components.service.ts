import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateComponentsService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  newComponent(component: any, container: ViewContainerRef) {
    container.clear();
    console.clear();
    setTimeout(() => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const newComponent = container.createComponent(componentFactory);
    }, 400);
  }
}
