import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovDitarunachal implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Apisetu Gov Ditarunachal',
                name: 'N8nDevApisetuGovDitarunachal',
                icon: { light: 'file:./apisetu-gov-ditarunachal.svg', dark: 'file:./apisetu-gov-ditarunachal.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Arunachal Pradesh eILP available on DigiLocker.',
                defaults: { name: 'Apisetu Gov Ditarunachal' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevApisetuGovDitarunachalApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
                ],
        };
}
