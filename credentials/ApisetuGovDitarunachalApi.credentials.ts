import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovDitarunachalApi implements ICredentialType {
        name = 'N8nDevApisetuGovDitarunachalApi';

        displayName = 'Apisetu Gov Ditarunachal API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovDitarunachal/apisetu-gov-ditarunachal.svg', dark: 'file:../nodes/ApisetuGovDitarunachal/apisetu-gov-ditarunachal.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/ditarunachal/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/ditarunachal/v3',
                        description: 'The base URL of your Apisetu Gov Ditarunachal API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
