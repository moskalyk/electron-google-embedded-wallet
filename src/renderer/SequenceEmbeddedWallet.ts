import { SequenceWaaS } from '@0xsequence/waas'

const sequence = new SequenceWaaS({
    projectAccessKey: 'AQAAAAAAAI32VkH_ZcoBVJd7SwAZcic_LZk',
    waasConfigKey:  'eyJwcm9qZWN0SWQiOjM2MzQyLCJycGNTZXJ2ZXIiOiJodHRwczovL3dhYXMuc2VxdWVuY2UuYXBwIn0=',
    network: 'base-sepolia'
})

export default sequence;