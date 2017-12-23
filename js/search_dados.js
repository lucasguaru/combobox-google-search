var links = [
    {
      nome: 'Kibana HK Log Técnico',
      url: "http://srvbdrivlbr04.santanderbr.pre.corp/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1h,mode:quick,to:now))&_a=(columns:!(bean.envioModulo,bean.envioStep,bean.sistemaOrigemSigla),filters:!(),index:openbus_search_br,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'tool:MSGLOGSMS')),sort:!(_score,desc))"
    },
    {
      nome: 'Grafana Prod Log Técnico',
      url: "http://bdmgrafana.santanderbr.corp/"
    },
    {
      nome: 'Jira Ticket',
      url: "https://jira.ci.gsnet.corp/secure/Dashboard.jspa"
    },
    {
      nome: 'Confluence MSG',
      url: "https://confluence.ci.gsnet.corp/display/MSGBR/MSG+BR+Home"
    },
    {
      nome: 'Confluence MSG - Documentação Completa',
      url: "https://confluence.ci.gsnet.corp/pages/viewpage.action?pageId=32880072"
    },
    {
      nome: 'PaaS Norte',
      url: "https://api.cmpn.paas.gsnetcloud.corp:8443/login?then=%2Foauth%2Fauthorize%3Fclient_id%3Dopenshift-web-console%26response_type%3Dtoken%26state%3D%257B%2522then%2522%253A%2522%252F%2522%252C%2522nonce%2522%253A%25221501527649922-801706909110660792050782695117637328254601431487574469938656037682775306017%2522%257D%26redirect_uri%3Dhttps%253A%252F%252Fapi.cmpn.paas.gsnetcloud.corp%253A8443%252Fconsole%252Foauth"
    },
    {
      nome: 'PaaS Sul',
      url: "https://api.cmps.paas.gsnetcloud.corp:8443/login?then=%2Foauth%2Fauthorize%3Fclient_id%3Dopenshift-web-console%26response_type%3Dtoken%26state%3DeyJ0aGVuIjoiLyIsIm5vbmNlIjoiMTUwMTUyNzcwNTk5NC0zMTUwOTkzNjY5MzE5NzM5MDg0NjI1NDEyNTQxNTI1NzM2NjgyOTkxODcwMDQ3MjExMzE5OTk4MzM5MTI2ODMyMzczNDM0NzA1MjkxODkifQ%26redirect_uri%3Dhttps%253A%252F%252Fapi.cmps.paas.gsnetcloud.corp%253A8443%252Fconsole%252Foauth"
    },
    {
      nome: 'Jenkins Devops',
      url: "http://jenkins.produbanbr.corp/"
    },
    {
      nome: 'Jenkins Legado',
      url: "http://clm.santanderbr.corp/jenkins/"
    },
    {
      nome: 'Nexus',
      url: "http://nexus.produbanbr.corp/"
    },
    {
      nome: 'Gitlab',
      url: "https://gitlab.produbanbr.corp/users/sign_in"
    },
    {
      nome: 'Gitlab Antigo Old',
      url: "https://gitlab.alm.gsnetcloud.corp/profile"
    },
    {
      nome: 'Zup',
      url: "https://esbapimanageradm.santanderbr.corp/auth/login.html?redirectTo=dashboard/"
    },
    {
      nome: 'Integrador Jenkins',
      url: "http://clm.santanderbr.corp/jenkins/job/jab-msgsrvinte/"
    },
    {
      nome: 'Nexus Antigo',
      url: "https://nexus.alm.gsnetcloud.corp/repository/maven-public/"
    },
    {
      nome: 'Hudson - Nexus',
      url: "http://bsbrsp2352.bs.br.bsch/hudson/view/RTC/job/JAB-MAIN/lastSuccessfulBuild/artifact/Jab/fw/dist/"
    },
    {
      nome: 'Zup Isban Dev',
      url: "https://esbapimanageradm.isbanbr.dev.corp/auth/login.html?redirectTo=dashboard/"
    },
    {
      nome: 'Nexus Upload Pacotes Third Party',
      url: "http://jenkins.produbanbr.corp/login?from=%2Fjob%2FJAVA-BR-DEVOPS-NexusUpload%2F"
    },
    {
      nome: 'E-messaging Sagent Pitney',
      url: "http://bsbrsp2285:9080/emessaging/login.jsp"
    },
    {
      nome: 'E-messaging Spectrym #1 Pitney',
      url: "http://msgcluster:9080/emessaging/login.jsp"
    },
    {
      nome: 'E-messaging Spectrym #2 Pitney',
      url: "http://msgcluster:9081/emessaging/mainMenu.html"
    },
    {
      nome: 'Spectrum Instalação',
      url: "http://spectrum.santanderbr.corp:8080/dcg/#clientTools"
    },
    {
      nome: 'Zenvia',
      url: "http://santander.zenvia360.com.br/report/page/desktop.jsf"
    },
    {
      nome: 'Zenvia Monitora',
      url: "http://santander.zenvia360.com.br/painel/"
    },
    {
      nome: 'Remedy',
      url: "http://gscbrasilpr01.bs.br.bsch:8082/arsys/shared/login.jsp?/arsys/home.com"
    },
    {
      nome: 'WAS 8.5 - Dev - Console',
      url: "https://srvmsgdvwbr01:9043/ibm/console/logon.jsp"
    },
    {
      nome: 'WAS 6.1 - HK - Console',
      url: "https://bsbrsp4616:9043/ibm/console/logon.jsp"
    },
    {
      nome: 'WAS 8.5 - HK - Console',
      url: "https://srvmsghvwbr01:9043/ibm/console/logon.jsp"
    },
    {
      nome: 'WAS 6.1 - Prod #1 - Console',
      url: "https://bsbrsp2285:9044/ibm/console/logon.jsp"
    },
    {
      nome: 'WAS 6.1 - Prod #2 - Console',
      url: "https://bsbrsp2286:9044/ibm/console/logon.jsp"
    },
    {
      nome: 'WAS 8.5 - Prod - Console',
      url: "https://srvmsgpvwbr01:9043/ibm/console/login.do?action=secure"
    },
    {
      nome: 'WAS 8.5 - Prod #1 - Log',
      url: "http://srvmsgpvwbr02:9080/logview/listlogs.jsp?logfolder=APP_MSG_NDwas01App01&profile=AppSrv01"
    },
    {
      nome: 'WAS 8.5 - Prod #2 - Log',
      url: "http://srvmsgpvwbr03:9080/logview/listlogs.jsp?logfolder=APP_MSG_NDwas01App01&profile=AppSrv01"
    },
    {
      nome: 'Spotfire Tibco',
      url: "http://dbgdopvwbr01:81/spotfire/wp/render/761194424092/analysis?file=/analises/analise%20emaill%20e%20sms&waid=bJQZvPoDj0OgD56CEOWr_-090110009dT13Z&wavid=0"
    },
    {
      nome: 'Escalonamento de Gestores - Siglas e Donos Owners',
      url: "http://sisesc.santanderbr.corp:86/aplicativos.aspx?IdAplicativo=3666"
    },
    {
      nome: 'Cerberon',
      url: "http://180.128.205.233/pithos/login.portal"
    },
    {
      nome: 'Batch Fechamento de Fatura - MSG-ENVIO-PUSH-SMS - Prod - Log Folder',
      url: "file:///\\\\srvpjvpvwbr11\\Servicos\\MSG\\MSG-ENVIO-PUSH-SMS\\logs"
    },
    {
      nome: 'Batch Fechamento de Fatura - MSG-ENVIO-PUSH-SMS - Prod - Log',
      url: "file:///\\\\srvpjvpvwbr11\\Servicos\\MSG\\MSG-ENVIO-PUSH-SMS\\logs\\jab-msg-envio-push-sms-batch.log"
    },
    {
      nome: 'DISN 1.1 - Prod #1 - Log',
      url: "http://srvmsgpvwbr02:9080/logview/downloadservlet?filename=jab-msgsrvdisn.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'DISN 1.1 - Prod #1 - Log - Debug',
      url: "http://srvmsgpvwbr02:9080/logview/downloadservlet?filename=jab-msgsrvdisn_debug.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'DISN 1.1 - Prod #2 - Log',
      url: "http://srvmsgpvwbr03:9080/logview/downloadservlet?filename=jab-msgsrvdisn.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'DISN 1.1 - Prod #2 - Log - Debug',
      url: "http://srvmsgpvwbr03:9080/logview/downloadservlet?filename=jab-msgsrvdisn_debug.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'Dispatcher Push 1.1 - Prod #1 - Log',
      url: "http://srvmsgpvwbr02:9080/logview/downloadservlet?filename=jab-msg-dispatcher-push-services.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'Dispatcher Push 1.1 - Prod #1 - Log - Debug',
      url: "http://srvmsgpvwbr02:9080/logview/downloadservlet?filename=jab-msg-dispatcher-push-services_debug.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'Dispatcher Push 1.1 - Prod #2 - Log',
      url: "http://srvmsgpvwbr03:9080/logview/downloadservlet?filename=jab-msg-dispatcher-push-services.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'Dispatcher Push 1.1 - Prod #2 - Log - Debug',
      url: "http://srvmsgpvwbr03:9080/logview/downloadservlet?filename=jab-msg-dispatcher-push-services_debug.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'Dispatcher SMS 1.1 - Prod #1 - Log',
      url: "http://srvmsgpvwbr02:9080/logview/downloadservlet?filename=jab-msg-dispatcher-sms-services.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'Dispatcher SMS 1.1 - Prod #1 - Log - Debug',
      url: "http://srvmsgpvwbr02:9080/logview/downloadservlet?filename=jab-msg-dispatcher-sms-services_debug.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'Dispatcher SMS 1.1 - Prod #2 - Log',
      url: "http://srvmsgpvwbr03:9080/logview/downloadservlet?filename=jab-msg-dispatcher-sms-services.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'Dispatcher SMS 1.1 - Prod #2 - Log - Debug',
      url: "http://srvmsgpvwbr02:9080/logview/downloadservlet?filename=jab-msg-dispatcher-sms-services_debug.log&profile=AppSrv01&folder=APP_MSG_NDwas01App01"
    },
    {
      nome: 'AAAAAA',
      url: "AAAAAA"
    }
    
    
  ];