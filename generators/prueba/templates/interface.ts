<% imports.forEach(function(elemImport){ %>
import { <%- elemImport.upperName %> } from "./<%= elemImport.lowerName %>";
<% }); %>
export interface <%- upperName %>Interface {
    <%- idDefault %>: number;
<% attributes.forEach(function(attribute){ %>
    <%- attribute.name %> : <%- attribute.type %>;
<% }); %>
}

export class <%- upperName %> implements <%- upperName %>Interface {
    <%- idDefault %>: number;
<% attributes.forEach(function(attribute){ %>
    <%- attribute.name %> : <%- attribute.type %>;
<% }); %>

    constructor(data?: <%- upperName %>Interface) {
        Object.assign(this, data);
    }

    public static getModelName() {
        return "<%- upperName %>";
    }

    public static factory(data: <%- upperName %>Interface): <%- upperName %> {
        return new <%- upperName %>(data);
    }
}
