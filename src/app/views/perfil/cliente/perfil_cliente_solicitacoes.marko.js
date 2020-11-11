// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/startbootstrap-freelancer$5.1.3/src/app/views/perfil/cliente/perfil_cliente_solicitacoes.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>Perfil Cliente - Solicitações</title><link href=vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Montserrat:400,700 rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic rel=stylesheet type=text/css><link href=css/freelancer.min.css rel=stylesheet></head><body id=page-top><nav class=\"navbar navbar-expand-lg text-uppercase fixed-top\" id=mainNav style=\"background-color: #707070\"><div class=container><button class=\"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded\" type=button data-toggle=collapse data-target=#navbarResponsive aria-controls=navbarResponsive aria-expanded=false aria-label=\"Toggle navigation\"><i class=\"fas fa-bars\"></i></button><a class=\"navbar-brand js-scroll-trigger\" href=#page-top>Portal Serv</a><div class=\"collapse navbar-collapse\" id=navbarResponsive><ul class=navbar-nav><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=cliente_index.html>Serviços</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=cliente_about.html>Sobre</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=cliente_contact.html>Ajuda</a></li></ul></div><button type=button class=\"btn btn-light\"><a href=perfil_cliente>Perfil</a></button></div></nav><section class=page-section id=contact><div class=container><br><br><h2 class=\"page-section-heading text-center mb-0\">Perfil Cliente</h2><br><br><nav aria-label=breadcrumb><ol class=breadcrumb><li class=breadcrumb-item><a href=perfil_cliente>Perfil</a></li><li class=\"breadcrumb-item active\" aria-current=page>Solicitações</li></ol></nav><div class=container-fluid><div class=container><div class=\"row py-2\"><div class=\"col-12 col-sm-10 mx-auto py-2\"><div class=table-responsive-sm>");

  if (data.solicitacoes) {
    out.w("<table id=solicitacoes class=\"table table-hover\"><thead><tr><th scope=col-2>Data e Hora</th><th scope=col-1>Profissional</th><th scope=col-1>Categoria</th><th scope=col-2>Celular</th><th scope=col-2>E-mail</th><th scope=col-2>Status</th><th scope=col-2>Ação</th></tr></thead><tbody>");

    var $for$0 = 0;

    marko_forOf(data.solicitacoes, function(solicitacao) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<tr" +
        marko_attr("id", "solicitacao_" + (solicitacao.id == null ? "" : solicitacao.id)) +
        "> <td>" +
        marko_escapeXml(solicitacao.data_solicitacao) +
        " - " +
        marko_escapeXml(solicitacao.hora_solicitacao) +
        "</td><td>" +
        marko_escapeXml(solicitacao.nome) +
        "</td><td>" +
        marko_escapeXml(solicitacao.categoria) +
        "</td><td>" +
        marko_escapeXml(solicitacao.celular) +
        "</td><td>" +
        marko_escapeXml(solicitacao.email) +
        "</td><td>" +
        marko_escapeXml(solicitacao.status) +
        "</td> ");

      if (solicitacao.id_status == 1) {
        out.w("<td><div class=row><div class=\"col-6 col-sm-4\"><button type=button class=\"btn btn-danger btn-sm\" data-toggle=modal" +
          marko_attr("data-target", "#cancelar_" + (solicitacao.id == null ? "" : solicitacao.id)) +
          ">Cancelar</button> </div> </div> </td> ");
      }

      out.w(" ");

      if (solicitacao.id_status == 2) {
        out.w("<td><div class=row><div class=\"col-6 col-sm-4\"><button type=button class=\"btn btn-success btn-sm\" data-toggle=modal" +
          marko_attr("data-target", "#avaliar_" + (solicitacao.id == null ? "" : solicitacao.id)) +
          ">Avaliar</button> </div> </div> </td> ");
      }

      if ((solicitacao.id_status == 3) || (solicitacao.id_status == 4)) {
        out.w("<td></td>");
      }

      out.w("<div id=modais><div class=\"modal fade\"" +
        marko_attr("id", "cancelar_" + (solicitacao.id == null ? "" : solicitacao.id)) +
        " tabindex=-1 aria-labelledby=exampleModalLabel aria-hidden=true><div class=modal-dialog><div class=modal-content><div class=modal-header><h5 class=modal-title id=exampleModalLabel>Cancelar Solicitação</h5><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=modal-body><p>Deseja realmente cancelar a solicitação de " +
        marko_escapeXml(solicitacao.categoria) +
        " de " +
        marko_escapeXml(solicitacao.nome) +
        "?</p></div><form action=/cancelar_solicitacao method=post id=cancelarSolicitacao><div class=modal-footer><div class=form-group style=\"display: none;\"><input id=idCliente name=idCliente" +
        marko_attr("value", data.usuarioSessao.idUsuario) +
        "><input id=idServico name=idServico" +
        marko_attr("value", solicitacao.id_servico) +
        "><input id=idSolicitacao name=idSolicitacao" +
        marko_attr("value", solicitacao.id) +
        "></div><button type=button class=\"btn btn-secondary\" data-dismiss=modal>Não</button><button type=submit class=\"btn btn-primary\">Sim</button></div></form> </div></div></div> <div class=\"modal fade\"" +
        marko_attr("id", "avaliar_" + (solicitacao.id == null ? "" : solicitacao.id)) +
        " tabindex=-1 aria-labelledby=exampleModalLabel aria-hidden=true><div class=modal-dialog><div class=modal-content><div class=modal-header><h5 class=modal-title id=exampleModalLabel>Avaliar Serviços - " +
        marko_escapeXml(solicitacao.categoria) +
        " de " +
        marko_escapeXml(solicitacao.nome) +
        "</h5><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=modal-body><p>Insira uma nota para os requisitos abaixo (de 1 a 5):</p><form action=/solicitacoes_cliente method=post id=avaliarServico><div class=\"input-group mb-3\"><div class=input-group-prepend><span class=input-group-text id=pontualidade>Pontualidade</span></div><input type=number id=pontualidade name=pontualidade class=form-control aria-label=pontualidade aria-describedby=pontualidade max=5 min=1 required></div><div class=\"input-group mb-3\"><div class=input-group-prepend><span class=input-group-text id=qualidade>Qualidade</span></div><input type=number id=qualidade name=qualidade class=form-control aria-label=qualidade aria-describedby=qualidade max=5 min=1 required></div><div class=\"input-group mb-3\"><div class=input-group-prepend><span class=input-group-text id=execucao>Execução</span></div><input type=number id=execucao name=execucao class=form-control aria-label=execucao aria-describedby=execucao max=5 min=1 required></div><div class=form-group><p>Comentários sobre o serviço:</p><textarea class=form-control name=comentarios id=comentarios type=text></textarea></div><div class=form-group style=\"display: none;\"><input id=idCliente name=idCliente" +
        marko_attr("value", data.usuarioSessao.idUsuario) +
        "><input id=idServico name=idServico" +
        marko_attr("value", solicitacao.id_servico) +
        "><input id=idSolicitacao name=idSolicitacao" +
        marko_attr("value", solicitacao.id) +
        "></div><div class=modal-footer><button type=button class=\"btn btn-secondary\" data-dismiss=modal>Cancelar</button><button type=submit class=\"btn btn-primary\" data-type=avaliar>Confirmar</button></div></form></div> </div></div></div></div></tr>");
    });

    out.w(" </tbody> </table>");
  } else {
    out.w("<div class=\"container py-5 my-5\"><div class=row><div class=col-sm-3></div><div class=col-sm-8><h2>Não existem solicitações.</h2></div></div></div>");
  }

  out.w(" </div></div></div></div></div></div></section><div class=\"container py-5 my-5\"><div class=\"conatiner-fluid py-5 my-5\"></div></div><footer class=\"footer text-center\"><div class=container><div class=row><div class=col-lg-2><p class=\"lead mt-3\">Sorocaba - SP</p></div><div class=col-lg-8></div><div class=col-lg-2><a class=\"btn btn-outline-light btn-social mx-2\" href=#><i class=\"fab fa-fw fa-whatsapp\"></i></a><a class=\"btn btn-outline-light btn-social mx-2\" href=#><i class=\"fab fa-fw fa-facebook-f\"></i></a></div></div></div></footer><div class=\"scroll-to-top d-lg-none position-fixed \"><a class=\"js-scroll-trigger d-block text-center text-white rounded\" href=#page-top><i class=\"fa fa-chevron-up\"></i></a></div><script src=vendor/jquery/jquery.min.js></script><script src=vendor/bootstrap/js/bootstrap.bundle.min.js></script><script src=vendor/jquery-easing/jquery.easing.min.js></script><script src=js/freelancer.min.js></script><script src=js/cancelaSolicitacao.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "142");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/startbootstrap-freelancer$5.1.3/src/app/views/perfil/cliente/perfil_cliente_solicitacoes.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
